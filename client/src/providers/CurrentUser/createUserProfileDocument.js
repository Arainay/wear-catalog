import { firestore } from '@app/firebase/firebase.utils';

const createUserProfileDocument = async (user, additionalData) => {
	if (!user) {
		return;
	}

	const userRef = firestore.doc(`users/${user.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = user;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (e) {
			// todo handle error
		}
	}

	return userRef;
};

export default createUserProfileDocument;