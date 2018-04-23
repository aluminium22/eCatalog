const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  drawer: {
    minWidth: 280,
  },
  stretch: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 2,
    paddingRight: 4,
    width: '100%',
  },
  '@media (min-width: 800px)': {
    navColumn: {
      width: '20%',
      minWidth: 300,
      height: '100%',
      position: 'fixed',
      overflow: 'auto',
      backgroundColor: '#ffffff',
    },
  },
  deskDrawer: {
    marginTop: 36,
    paddingBottom: 60,
  },
}

export default styles;
