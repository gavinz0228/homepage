import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    socialMediaIcon: {
        width: 32,
        height: 32  
    },
  });
class NavBar extends Component {
    constructor(props){
        super(props);
        this.clickCount = 0; 
        this.state = {
            open: false,
            message: ""
          };
        this.nameOnCLick = this.nameOnCLick.bind(this);
        this.handlerClose = this.handlerClose.bind(this);
    }

    nameOnCLick(){
        console.log(this.clickCount);
        this.clickCount++;
        if(this.clickCount === 1){
            this.setState({message: "Hmmm, I like your curiosity. Why not click a few more times?"});
            this.setState({open: true});
        }
        else if(this.clickCount === 8)
        {
            this.setState({message: "Wow, I admire your persistence. I don't gurantee you will get anything if you continue clicking, though."});
            this.setState({open: true});
        }
        else if(this.clickCount === 25)
        {
            this.setState({message: "Wow, I admire your stamina! I'm not going to tell you to stop. It's because you will probably see something surprising... or not..."});
            this.setState({open: true});
        }
    }
    handlerClose(){

    }
    render() {
      return (
            <AppBar position="sticky" color="default">
                <Toolbar>
                    <Button color="inherit" onClick={this.nameOnCLick} >
                        Gavin (Jialang) Zhang
                    </Button>
                    <Typography variant="title" color="inherit" style={{flexGrow:1}} align="left" >

                    </Typography>
                    <IconButton  href="https://www.linkedin.com/in/jialang-zhang-91785271/">
                        <img alt="Linkedin" src="images/linkedin.svg" className={this.props.classes.socialMediaIcon}/>
                    </IconButton>
                    <IconButton  href="https://github.com/gavinz0228">
                        <img alt="github" src="images/github.svg" className={this.props.classes.socialMediaIcon}/>
                    </IconButton>
                    <IconButton>
                        <a href="mailto:gavinz0228@gmail.com">
                        <img alt="gmail" src="images/gmail.svg" className={this.props.classes.socialMediaIcon}/></a>
                    </IconButton>
                    <IconButton>
                        <a href="https://www.facebook.com/gavin.zhang.7">
                        <img alt="facebook" src="images/facebook.svg" className={this.props.classes.socialMediaIcon}/></a>
                    </IconButton>
                </Toolbar>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.message}</span>}
                />


            </AppBar>
      )
    }
  }
  export default withStyles(styles)(NavBar) 