const hasPassword = '$2a$10$wTDQXR6qC2MmOik6TMzusOnqA.AA6H4.PV0s0yXeVpPAGtTp3QNjO';
const token = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMiLCJ1c2VybmFtZSI6IkhlbGdhIiwiaWF0IjoxNjk0ODgzNzM1fQ.bWPQYuOZPmVRgjgwodINMUOppnMUW4gVJGqcXjB1RVc' };

const logingBodyWithoutUsername = { username: '', password: 'gandalf123' };
const logingBodyWithoutPassword = { username: 'gandalf', password: '' };
const userMock = {
  id: 3,
  username: 'Helga',
  vocation: 'Curandeira',
  level: 9,
  password: hasPassword,

};

const serviceReturnSuccess = { status: 'SUCCESSFUL', data: token };
const serviceReturnUnauthorized = {
  status: 'UNAUTHORIZED',
  data: { message: 'Username or password invalid' }
};


export default {
  userMock,
  logingBodyWithoutUsername,
  logingBodyWithoutPassword,
  token,
  serviceReturnUnauthorized
}