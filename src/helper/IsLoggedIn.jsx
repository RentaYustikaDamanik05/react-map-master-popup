import store from 'store';

export default (IsLoggedIn) => !!store.get('loggedIn')