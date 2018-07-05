/**
 * @file 列表组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      data
    };
  }

  handleClick(index) {
    console.log(index);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    const { data } = nextProps;
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const { render } = this.props;
    // console.log(render);
    const renderList = data.map((item, index) => {
      if (render) {
        return render(item, index, this.handleClick.bind(this, index));
      } else {
        return (
          <li key={index} onClick={this.handleClick.bind(this, index)}>
            {item}
          </li>
        );
      }
    });
    return <ul>{renderList}</ul>;
  }
}

List.defaultProps = {
  data: [5, 2, 3, 4],
  render: (item, index, handleClick) => (
    <h1 key={index} onClick={handleClick}>
      Hello {item}
    </h1>
  )
};

export default List;
