import React, { Component } from 'react';

interface IUser {
  id: number;
  name: string;
}

interface IState {
  users: IUser[];
  loading: boolean;
  error: Error | null;
}

class UsersClass extends Component {
  constructor(props: object) {
    super(props);
    this.state = { users: [], loading: true, error: null };
    console.log('constructor');
  }

  componentDidMount(): void {
      console.log('componentDidMount');
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Ошибка сети');
        return res.json();
      })
      .then(
        (data: IUser[]) => this.setState({ users: data, loading: false}),
        (error: Error) => this.setState({ error, loading: false })
      );
  }

  shouldComponentUpdate(nextProps: {}, nextState: IState): boolean {
    console.log('shouldComponentUpdate - вызывается перед обновлением компонента');
    return true;
  }

  componentDidUpdate(prevProps: {}, prevState: IState): void {
    console.log('componentDidUpdate - вызывается после перерисовки');
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount - вызывается перед удалением');
  }

  render() : React.ReactNode {
    const { users, loading, error } = this.state;
    
    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;

    return (
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default UsersClass;