from flask import Flask, request, jsonify
from datetime import datetime
from business.bonds import simple_yield_calc
from business.savings import calculate_savings
from business.inflation import calculate_inflation
from business.mortgage import calculate_monthly_mortgage
from business.ust_yield_curve import get_yield_curve_by_dates
from flask import render_template
import json
app = Flask(__name__)

@app.route('/')
def myInfo():
    return render_template('myInfo.html')

@app.route('/yieldCalculator')
def yieldCalculator():
    return render_template('yieldCalculator.html')

@app.route('/savingsCalculator')
def savings_calculator():
    return render_template('savingsCalculator.html')

@app.route('/inflationCalculator')
def inflation_calculator():
    return render_template('inflationCalculator.html')

@app.route('/mortgageCalculator')
def mortgage_calculator():
    return render_template('mortgageCalculator.html')

@app.route('/yieldCurve')
def yield_curve_chart():
    return render_template('yieldCurve.html')

@app.route('/calculateSavings/', methods=['POST'])
def savings_calculate():
    params = request.get_json()
    num_years = int(params['numOfYears'])
    start_amount = float(params['startAmount'])
    monthly_contrib = float(params['monthlyContribution'])
    start_year = datetime.now().year
    yld = float(params['yieldOfInvestment']) / 100
    return calculate_savings(start_amount, monthly_contrib, yld, start_year, num_years)

@app.route('/calculateBondYield/', methods=['POST'])
def calculate_bond_yield():
    content = request.get_json()
    faceValue = float(content['faceValue'])
    price = float(content['price'])
    pmtFreq = int(content['pmtFrequency'])
    coupon = float(content['coupon']) / 100
    startDate = datetime.strptime(content['startDate'], '%Y-%m-%d')
    endDate = datetime.strptime(content['maturityDate'], '%Y-%m-%d')
    settleDate = datetime.strptime(content['settleDate'], '%Y-%m-%d')
    return simple_yield_calc(faceValue, price, startDate, endDate, pmtFreq, coupon, 0, pmtFreq, settleDate)

@app.route('/calculateInflation/', methods=['POST'])
def calculate_inflation_for_year():
    content = request.get_json()
    curr_amount = float(content['currAmount'])
    rate = float(content['rate']) / 100
    tartget_year = float(content['targetedYear'])
    content['calculatedAmount'] = calculate_inflation(rate, curr_amount, datetime.now().year, tartget_year)
    return content

@app.route('/calculateMortgage/', methods=['POST'])
def calculate_mortgage():
    content = request.get_json()
    principal = -1 * float(content['amountToBorrow'])
    rate = float(content['rate']) / 100
    num_years = float(content['numYears'])
    content['monthly_payment'] = calculate_monthly_mortgage(principal, rate, num_years)
    return content

@app.route('/getYieldCurve/', methods=['POST'])
def get_yield_curve():
    content = request.get_json()
    date_strs = content['dates']
    data = get_yield_curve_by_dates([ datetime.strptime(s, '%Y-%m-%d') for s in date_strs ])
    return {"yieldData": [json.loads(data[i].to_json(orient="records"))[0] for i in range(len(data)) ]}

@app.route('/resume/', methods=['GET'])
def get_resume():
    return json.loads(r'''{
  "id": "1N0fXcrHfj",
  "educations":[
    {
      "school": "CUNY - Brooklyn College",
      "graduationYear": "2016",
      "major": "Computer Science",
      "gpa": 3.75
    }
  ],
  "positions": [
    {
      "company": "Bloomberg L.P.",
      "startDate": "07/2021",
      "endDate": "Present",
      "location": "731 Lexington Ave, New York, NY 10022",
      "summary": "Senior Software Engineer - Buy-Side Trading Platform AIM"
    },
    {
      "company": "SS&C Technologies",
      "startDate": "12/2019",
      "endDate": "07/21",
      "location": "24 W. 25th Street, New York, NY 10010",
      "summary": "Participate in core development for a investment operations and accounting system - Singularity\\nSpecialize in fixed-income-related financial products design and development(bonds, mortgage-backed securities, repo, and etc.) \\nAnalyze yield, amortization, interest accrual and cash-flows-related issues \\nMicrosoft tech stack C#, MS SQL Server, .Net MVC\\n"
    },
    {
      "company": "Chimera Investment Corporation",
      "startDate": "01/2016",
      "endDate": "11/2019",
      "location": "520 Madison Avenue, New York, NY 10022",
      "summary": "Integrated BlackRock\\'s Aladdin with SS&C\\'s CAMRA accounting system \\nBuilt SSRS reports and other business tools related to mortgage-backed-related financial products for internal users\nFinancial data processing\\nTime series data and bank statement integration from different sources \\nImproved and maintained a job configuration system to automate daily processes \\nBuilt tools for the softwares bought from vendors"
    }
  ]
}
''')