// index.js - components
// This file will act as the import for all functions inside the directory
// common - general layouts like header, footer, etc.
// helper - utility function specific to app like rendering components

import Header from './common/Header.js';
import Footer from './common/Footer.js';

import LoginForm from './helpers/LoginForm.js';
import RegisterForm from './helpers/RegisterForm.js';

import { HabitInfo, HabitVisualization } from './helpers/HabitsHelpers.js';

export { Header, Footer, LoginForm, RegisterForm, HabitInfo, HabitVisualization };
