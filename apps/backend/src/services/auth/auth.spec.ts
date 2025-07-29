import { prisma } from '../../integrations/prisma';
import {registerUser, loginUser} from './auth.service';

beforeAll(async () => {
  await prisma.$disconnect();
});

describe('Auth', () => {
  test('registerUser', () => {   
    registerUser();
  });

  test('loginUser', () => {   
    loginUser();
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
