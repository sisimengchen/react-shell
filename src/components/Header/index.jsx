/**
 * @file 页头组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from 'core/history';
import './index.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    return state;
  }

  render() {
    return (
      <header id="components-header">
        <div className="secondary">
          {this.props.back ? (
            <a
              className="back"
              href="javascript:void(0)"
              onClick={() => {
                if (this.props.back.length) {
                  history.push(this.props.back);
                } else {
                  history.goBack();
                }
              }}
            >
              <img src={require('./assets/icon-chevron-left.svg')} />
            </a>
          ) : null}
          <div className="title">{this.props.title}</div>
          <img
            className="avatar"
            src={this.props.userAvatar ? this.props.userAvatar : require('./assets/icon-account.svg')}
          />
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  back: true, // false-不显示 true-显示（默认采用history.goback回退） 'xxx'默认直接跳转指定的url
  title: 'header',
  userName: undefined,
  userAvatar: undefined
};

const mapStateToProps = ({ currentUser }) => ({
  userName: currentUser.name,
  userAvatar: currentUser.avatar
});

export default connect(mapStateToProps)(Header);
