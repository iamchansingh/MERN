import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserDetails } from "../../actions/authActions";

class profileImage extends Component {
  state = { file: null };
  //   componentDidMount() {
  //     this.props.getCurrentProfile();
  //   }
  onFileChange(event) {
    this.setState({ file: event.target.files[0] });
    this.props.updateUserDetails(this.props.auth, this.state.file);
  }
  render() {
    console.log(this.state);
    const { user } = this.props.auth;
    const { profile } = this.props.profile;
    console.log(user);
    console.log(this.props.profile);
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img src={user.avatar} alt="" />
                <input
                  onChange={this.onFileChange.bind(this)}
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Dashboard.propTypes = {
//   getCurrentProfile: PropTypes.func.isRequired,
//   deleteAccount: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { updateUserDetails }
)(profileImage);
