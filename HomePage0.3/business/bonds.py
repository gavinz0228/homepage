
from datetime import datetime 
import math
import QuantLib as ql

def simple_yield_calc(face, price, issue_date, last_pmt_date, pay_freq, coupon, compounded, com_freq, settle_date):
    issueDate = ql.Date(issue_date.day, issue_date.month, issue_date.year)
    settleDate = ql.Date(settle_date.day, settle_date.month, settle_date.year)
    maturityDate = ql.Date(last_pmt_date.day, last_pmt_date.month, last_pmt_date.year)
    tenor = ql.Period(pay_freq)
    calendar = ql.NullCalendar()
    bussinessConvention = ql.Unadjusted
    dateGeneration = ql.DateGeneration.Backward
    monthEnd = False
    schedule = ql.Schedule (issueDate, maturityDate, tenor, calendar, bussinessConvention,
                                bussinessConvention , dateGeneration, monthEnd)
    settlementDays = 0
    fixedRateBond = ql.FixedRateBond(settlementDays, face, schedule, [coupon],  ql.Thirty360())
    yld = fixedRateBond.bondYield(price, ql.Thirty360(),compounded, com_freq, settleDate)
    cfs = add_npv_to_cashflows(fixedRateBond.cashflows(), pay_freq, yld)
    return {"yield":yld, "cashFlows": [ (str(cf[0]),) + cf[1:] for cf in cfs] }

def add_npv_to_cashflows(cfs, freq, yld):
    pre_date = None
    offset = 0
    res = []
    i = 0
    for cf in cfs:
        if cf.date() == pre_date:
            offset += 1
        res.append( (cf.date().to_date(), cf.amount(), cf.amount()/ math.pow(1 + yld/ freq, i - offset + 1), ))
        pre_date = cf.date()
        i += 1
    return res
if __name__ == '__main__':
    yld, cashflows = simple_yield_calc(1000, 100,datetime(2019,1,1), datetime(2020,1,1), 12, 0.03, 0, 12, datetime.now())
    for cf in cashflows:
        print(cf)
    print(yld)