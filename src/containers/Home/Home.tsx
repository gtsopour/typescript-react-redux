import * as React from 'react';
import './styles.scss';
import {connect} from 'react-redux';
import {ActionCreatorsMapObject, bindActionCreators, Dispatch} from 'redux';
import {fetchProjects, resetProjects} from './HomeAction';
import {Project} from '../../models/Project';

interface Props {
  fetchProjects: () => void;
  resetProjects: () => void;
  projects: Project[];
}

interface State {}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const { fetchProjects, resetProjects } = this.props;
    resetProjects();
    fetchProjects();
  }

  render() {
    const { projects } = this.props;
    const projectsList = projects.map((item, key) =>
      <div key={key}>({item.id}) {item.name}</div>
    );
    return (
      <div>{projectsList}</div>
    )
  }
}

const mapDispatchToProps: ((dispatch: Dispatch) => ActionCreatorsMapObject) = (dispatch) => {
  return bindActionCreators({ fetchProjects, resetProjects }, dispatch);
};

const mapStateToProps: any = ({ homeReducer }: any) => {
  return {
    projects: homeReducer.projects,
    projectsError: homeReducer.projectsError
  };
};

export default connect<Props>(mapStateToProps, mapDispatchToProps)(Home);
