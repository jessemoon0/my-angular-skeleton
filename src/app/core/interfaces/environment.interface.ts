export interface IEnvironment {
  production: boolean;
  translocoUrl: string;
  firebaseConfig?: IFirebaseConfig;
}

interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
