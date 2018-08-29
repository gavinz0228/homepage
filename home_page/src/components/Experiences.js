import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
const styles = theme => ({
    title:{
        paddingLeft: 50,
        paddingTop: 20
    },
    content:{
        marginLeft:240
    },
    divider:{
        margin:10
    }
  });
class Experiences extends Component {
    render() {
      return (
        <Card >
            <CardContent>
                <Typography gutterBottom variant="headline" color="secondary" component="h2" className={this.props.classes.title}>
                    Experiences
                </Typography>
                <Typography component="p" className={this.props.classes.content} >
                    <Typography gutterBottom variant="title" color="textPrimary" component="h3">
                        Chimera Investment Corporation
                    </Typography>
                    <Typography gutterBottom variant="subheading" color="textPrimary" component="h3">
                        520 Madison Avenue, New York, NY 10022
                    </Typography>
                    Design tables and implement stored procedures for business applications in MS SQL database<br/>
                    Impletement fornt-end and backend for businese applications<br/>
                    Integrated Aladdin (BlackRock) and CAMRA(SS&C) for the company<br/>
                    Maintain a generic job configuration application for all ETL operations<br/>
                   
                    <Divider className={this.props.classes.divider}/>
                    
                    <Typography gutterBottom variant="title" color="textPrimary" component="h3">
                        Chimera Investment Corporation
                    </Typography>
                    <Typography gutterBottom variant="subheading" color="textPrimary" component="h3">
                        520 Madison Avenue, New York, NY 10022
                    </Typography>
                    Design tables and implement stored procedures for business applications in MS SQL database<br/>
                    Impletement fornt-end and backend for businese applications<br/>
                    Integrated Aladdin (BlackRock) and CAMRA(SS&C) for the company<br/>
                    Maintain a generic job configuration application for all ETL operations<br/>
                   
                    <Divider className={this.props.classes.divider}/>
                    <Typography gutterBottom variant="title" color="textPrimary" component="h3">
                        Chimera Investment Corporation
                    </Typography>
                    <Typography gutterBottom variant="subheading" color="textPrimary" component="h3">
                        520 Madison Avenue, New York, NY 10022
                    </Typography>
                    Design tables and implement stored procedures for business applications in MS SQL database<br/>
                    Impletement fornt-end and backend for businese applications<br/>
                    Integrated Aladdin (BlackRock) and CAMRA(SS&C) for the company<br/>
                    Maintain a generic job configuration application for all ETL operations<br/>
                   

                </Typography>

                
            </CardContent>
        </Card>
      )
    }
  }
  export default withStyles(styles)(Experiences);