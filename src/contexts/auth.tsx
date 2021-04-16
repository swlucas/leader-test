import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';

interface AuthContextData {
  signed: boolean;
  token: string | null;
  loading: boolean;
  signIn(data: auth.SignInRequest): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedToken) {
        setToken(storagedToken);
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(data: auth.SignInRequest) {
    const response = await auth.signIn(data);
    setToken(response.token);

    await AsyncStorage.setItem('@RNAuth:token', response.token);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{signed: !!token, token, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export {AuthProvider, useAuth};
