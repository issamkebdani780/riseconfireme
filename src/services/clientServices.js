const BASE_URL = 'https://api.rise-confirm.jervi.dev';

export const clientServices = {

    signIn : async (credentials) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || 'La connexion a échoué. Veuillez vérifier vos identifiants.');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Signin error:', error);
            if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                throw new Error("Impossible de se connecter au serveur. Veuillez vérifier votre connexion ou réessayer plus tard.");
            }
            throw error;
        }
    },

    signUp : async (userData) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || 'Registration failed');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Signup error:', error);
            if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                throw new Error("Impossible de se connecter au serveur. Veuillez vérifier votre connexion ou réessayer plus tard.");
            }
            throw error;
        }
    },

    getProfile : async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error("Non authentifié");

            const response = await fetch(`${BASE_URL}/auth/me`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || 'Impossible de récupérer le profil');
            }

            return await response.json();
        } catch (error) {
            console.error('Get profile error:', error);
            if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                throw new Error("Impossible de se connecter au serveur.");
            }
            throw error;
        }
    },
    
    signOut : async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const response = await fetch(`${BASE_URL}/auth/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                console.warn("La requête de déconnexion a échoué côté serveur");
            }
        } catch (error) {
            console.error('Signout error:', error);
        } finally {
            // Toujours nettoyer le stockage local, même si la requête échoue
            localStorage.removeItem('token');
            localStorage.removeItem('userName');
        }
    }
}

