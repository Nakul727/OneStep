// index.js - components
// This file will act as the import for all functions inside the directory
// common - general layouts like header, footer, etc.
// helper - utility function specific to app like rendering components

import Header from './common/Header.js';
import Footer from './common/Footer.js';

import LoginForm from './helpers/LoginForm.js';
import RegisterForm from './helpers/RegisterForm.js';

export { Header, Footer, LoginForm, RegisterForm };