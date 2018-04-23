import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

import Filters from '../Filters/Filters';
import SideList from './SideList';
import TabContainer from '../Container/TabContainer';
import styles from './styles';

const ResponsiveDrawer = ( props ) => {

  const isMobile = () => {
    const screenSize = window.innerWidth;
    return screenSize < 800 ? true: false;
  }

  const mobileDrawer = () => {
    console.log(isMobile());
    if(isMobile()){
      return(
        <Drawer
          open={props.open}
          onClose={props.onClose}>
            <div
              className={props.classes.drawer}
              tabIndex={0}
              role="button"
              onKeyDown={props.onKeyDown}
            >
              <Paper className={props.classes.root}>
                 <Tabs
                   className={props.classes.tab}
                   value={props.tabsValue}
                   onChange={props.handleTabChange}
                   indicatorColor="primary"
                   textColor="primary"
                   centered
                 >
                   <Tab label={props.tab1Title} />
                   <Tab label={props.tab2Title} />
                 </Tabs>
               </Paper>
               {props.tabsValue === 0 && <TabContainer className={props.classes.stretch}>
                 <SideList
                   sideListCategories={props.sideListCategories}
                  />
               </TabContainer>}
               {props.tabsValue === 1 && <TabContainer>
                 <Filters
                   sortSelection={props.sortSelection}
                   onSortChange={props.onSortChange}
                   sortMap={props.filterSortMap}
                   filterList={props.filterList}
                   facetHandleChange={props.facetHandleChange}
                 />
               </TabContainer>}
            </div>
        </Drawer>
      )
    }else{
      return(
      <div className={props.classes.navColumn}>
        <div
          className={props.classes.drawer, props.classes.deskDrawer}
          tabIndex={0}
          role="button"
          onKeyDown={props.onKeyDown}
        >
          <Paper className={props.classes.root}>
             <Tabs
               className={props.classes.tab}
               value={props.tabsValue}
               onChange={props.handleTabChange}
               indicatorColor="primary"
               textColor="primary"
               centered
             >
               <Tab label={props.tab1Title} />
               <Tab label={props.tab2Title} />
             </Tabs>
           </Paper>
           {props.tabsValue === 0 && <TabContainer className={props.classes.stretch}>
             <SideList
               sideListCategories={props.sideListCategories}
              />
           </TabContainer>}
           {props.tabsValue === 1 && <TabContainer>
             <Filters
               sortSelection={props.sortSelection}
               onSortChange={props.onSortChange}
               sortMap={props.filterSortMap}
               filterList={props.filterList}
               facetHandleChange={props.facetHandleChange}
             />
           </TabContainer>}
        </div>
      </div>
     )
    }
  }

  return(
    mobileDrawer()
  )
}

export default withStyles(styles)(ResponsiveDrawer);
