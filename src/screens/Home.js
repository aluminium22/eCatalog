import React, { Component } from 'react';
import PropTypes from 'react';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from 'material-ui/TextField';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Grid from 'material-ui/Grid'
import classNames from 'classnames';
import SearchIcon from '@material-ui/icons/Search';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 4 }}>
      {props.children}
    </Typography>
  );
}

function generate(element) {
  return [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}


const tileData = [
   {
     img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
     title: 'Image1',
     author: 'author',
   },
   {
     img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
     title: 'Image2',
     author: 'author',
   },
   {
     img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
     title: 'Image3',
     author: 'author',
   },
   {
     img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
     title: 'Image4',
     author: 'author',
   },
   {
     img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
     title: 'Image5',
     author: 'author',
   },
   {
     img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
     title: 'Image6',
     author: 'author',
   },
   {
     img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
     title: 'Image7',
     author: 'author',
   },
   {
     img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
     title: 'Image8',
     author: 'author',
   },   {
        img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
        title: 'Image9',
        author: 'author',
      },
      {
        img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
        title: 'Image0',
        author: 'author',
      },
      {
        img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
        title: 'Image00',
        author: 'author',
      },
      {
        img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
        title: 'Image09',
        author: 'author',
      },
      {
        img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
        title: 'Image08',
        author: 'author',
      },
      {
        img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
        title: 'Image07',
        author: 'author',
      },
      {
        img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
        title: 'Image06',
        author: 'author',
      },
      {
        img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
        title: 'Image05',
        author: 'author',
      },
      {
        img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
        title: 'Image047',
        author: 'author',
      },
      {
        img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
        title: 'Image036',
        author: 'author',
      },
      {
        img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
        title: 'Image025',
        author: 'author',
      },
      {
        img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
        title: 'Image015',
        author: 'author',
      },
]
const styles = {
  root: {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  flex: {
    flex: 1,
  },
  list: {
    width: '100%',
  },
  fullList: {
    width: 'auto',
  },
  container: {
  display: 'flex',
  flexWrap: 'wrap',
},
bootstrapInput: {
    backgroundColor: '#ffffff',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: '100%',
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  stretch: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 2,
    paddingRight: 4,
    width: '100%',
  },
  input:{
    width:'70%',
  },
  searchIcon: {
    color: '#ffffff',
  },
  cardContainer: {
    flexDirections: 'row',
  }
};

class Home extends Component {
  state = {
     left: false,
     value: 0,
   };

   toggleDrawer = (side, open) => () => {
     this.setState({
       [side]: open,
     });
   };
   handleTabChange = (event, value) => {
     console.log('tab fire', value)
      this.setState({ value });
    };

   render() {
     const { classes, value } = this.props;

     const sideList = (
       <div className={classes.list}>

              <Typography variant="title" className={classes.title}>
                Text only
              </Typography>
              <div className={classes.demo}>
                <List className={classes.stretch}>
                  {generate(
                    <ListItem className={classes.stretch}>
                      <Button className={classes.stretch} variant="raised" color="primary">
                        Category
                      </Button>
                    </ListItem>
                  )}
                </List>
              </div>
       </div>
     );

     return (
       <div>
         <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Matco Tools
            </Typography>
            <TextField
              className={classes.input}
                placeholder="Search Catalog"
                id="bootstrap-input"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.bootstrapFormLabel,
                }}
              />
              <IconButton className={classes.searchIcon} aria-label="Delete">
                <SearchIcon />
              </IconButton>
          </Toolbar>
        </AppBar>
         <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
           <div
             tabIndex={0}
             role="button"
             onKeyDown={this.toggleDrawer('left', false)}
           >
             <Paper className={classes.root}>
                <Tabs
                  className={classes.tab}
                  value={this.state.value}
                  onChange={this.handleTabChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                </Tabs>
              </Paper>
              {this.state.value === 0 && <TabContainer className={classes.stretch}>{sideList}</TabContainer>}
              {this.state.value === 1 && <TabContainer>Item Two</TabContainer>}
           </div>
         </Drawer>
         <GridList cellHeight={180} cols={4} className={classes.gridList}>
           <GridListTile key="Subheader" cols={4} spacing={8} style={{ height: 'auto' }}>
             <Subheader component="div">Category</Subheader>
           </GridListTile>
               {tileData.map(tile => (
                 <GridListTile key={tile.title} >
                   <img src={tile.img} alt={tile.title} />
                   <GridListTileBar
                     className={classes.carContainer}
                     title={tile.title}
                     subtitle={
                       <div>
                       <div className={classes.carLabels} >by: {tile.author}</div>
                       <div className={classes.carLabels} >by: {tile.author}</div>
                      </div>
                      }
                     actionIcon={
                       <IconButton className={classes.icon}>
                         <InfoIcon />
                       </IconButton>
                     }
                   />
                 </GridListTile>
               ))}
             </GridList>
       </div>
     );
   }
 }


export default withStyles(styles)(Home);
