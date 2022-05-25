import Profile from './profile/Profile';
import Statistic from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';

import user from './profile/user.json';
import friends from './friendList/friends.json';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'block',
        justifyContent: 'center',
        textAlign: 'center',
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
      <Statistic title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
