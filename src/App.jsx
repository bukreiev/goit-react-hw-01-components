import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Data/Statistics';
import data from './components/Data/data.json'
import FriendList from './components/FriendsList/FriendList';
import friends from './components/FriendsList/friends.json';
import TransactionHistory from './components/Transactions/Transactions';
import transactions from './components/Transactions/transactions.json';

export default function App() {
  return (
    <div
      className='container'
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
      
      <Statistics title="Upload stats" stats={data}/>

      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
      
    </div>
  );
};
