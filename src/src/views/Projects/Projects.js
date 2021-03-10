import React, { Component, Fragment } from "react";
import { Layout } from "antd";
import Navbar from "../../../src/layouts/layout-components/menu";
import SideBar from "../../../src/layouts/layout-components/sidebar";
import FooterTab from "../../../src/layouts/layout-components/footer";
import ProjectsCard from "../../components/ProjectsCard/index.js";
import { Grid, Paper, withStyles } from "@material-ui/core";
import ImageCard from "../../components/Card/ImageCard";
import axios from "axios";
import { appConstants } from "../../constants/app.constants";
import { connect } from "react-redux";
import CatalogMagic from "../../components/Loader/CatalogMagic";
const { Content } = Layout;

const styles = theme => ({
 
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
export class Projects extends Component {

  constructor(props){
    super(props);
    this.state={
      projects:[],
      loading:true
    }
  }



  componentDidMount =() =>{
    axios({
      method: "GET",
      url:  `http://trail-api.test.vggdev.com/${appConstants.PROGRAMS}/`,
       headers: { accessToken: this.props.auth.data.accessToken},
    })
    .then(({data})=>{
      console.log("data".data)
      this.setState({projects:data.data},()=>{
        this.setState({loading:false})
      })
    })
  }


  renderProjectList = (projects)=>{
    let projectElem = []
    for (let i in projects){
      projectElem.push(
        <Grid item xs={12} sm={4}key={projects[i].id}>
        <ImageCard
        name={projects[i].name}
        code={projects[i].code}
        handleOverview={this.handleOverview}
        id={projects[i].id}
        image={projects[i].image}
        sdgs={projects[i].sdgs}
        />
      </Grid>
      )
    }
    return projectElem
  }

  handleOverview = (id)=>{
    this.props.history.push("/dashboard/projects/overview")
    this.props.history.push({
      pathname: '/dashboard/projects/overview',
      state: { detail: id }
    })
  }
  render() {


    const {classes} = this.props;
    const {projects,loading}= this.state;
    return (
      <div>
        <Fragment>
          <Layout style={{ minHeight: "100vh" }}>
            <SideBar />
            <Layout className="site-layout">
              <Navbar />
              <Content style={{ margin: "0 16px" }}>
                <h1 style={h1}>Projects</h1>
                <Grid container spacing={3}>
                  { loading &&
                  [0,1,2,3,4,5].map((index)=>{
                    return(
                      <Grid item xs={12} sm={4} key={index}>
                      <CatalogMagic />
                      </Grid>
                    )
                  })

                  }
                   {!loading&&this.renderProjectList(projects)}
                  
                  
                </Grid>
              </Content>
              <FooterTab />
            </Layout>
          </Layout>
        </Fragment>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

// export default connect(mapStateToProps, {})(ProjectsCard);

export default withStyles(styles)(connect(mapStateToProps, {})(Projects))


const h1 = {
  fontWeight: "700",
  fontSize: "23px",
  padding: "16px",
  paddingLeft: "0px",
  marginTop: "80px",
};
