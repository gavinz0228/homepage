import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    socialMediaIcon: {
        width: 32,
        height: 32  
    },
  });
class NavBar extends Component {
    render() {
      return (
            <AppBar position="sticky" color="default">
                <Toolbar>
                    <Button color="inherit" >
                        Gavin (Jialang) Zhang
                    </Button>
                    <Typography variant="title" color="inherit" style={{flexGrow:1}} align="left" >

                    </Typography>
                    <IconButton  href="https://www.linkedin.com/in/jialang-zhang-91785271/">
                        <img src="images/linkedin.svg" className={this.props.classes.socialMediaIcon}/>
                    </IconButton>
                    <IconButton  href="https://github.com/gavinz0228">
                        <img src="images/github.svg" className={this.props.classes.socialMediaIcon}/>
                    </IconButton>
                    <IconButton>
                        <a href="mailto:gavinz0228@gmail.com"><img src="images/gmail.svg" className={this.props.classes.socialMediaIcon}/></a>
                    </IconButton>
                    <IconButton>
                        <a href="https://www.facebook.com/gavin.zhang.7"><img src="images/facebook.svg" className={this.props.classes.socialMediaIcon}/></a>
                    </IconButton>
                </Toolbar>
            </AppBar>
      )
    }
  }
  export default withStyles(styles)(NavBar) 