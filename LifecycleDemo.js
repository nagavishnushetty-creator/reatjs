import React from 'react';
class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Component is being constructed');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Syncing props to state');
    return null;}
  componentDidMount() {
    console.log('componentDidMount: Component mounted');}
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Should component re-render?');
    return true;}
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Before DOM updates');
    return null;}
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component updated');}
  componentWillUnmount() {
    console.log('componentWillUnmount: Cleanup before unmount');}
  increment = () => {
    this.setState({ count: this.state.count + 1 });};
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    console.log('Render: Component rendering');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
export default LifecycleDemo;