import React, { useState } from "react";
import {
	StyleSheet,
	View,
	KeyboardAvoidingView,
	Platform,
	TouchableOpacity,
	Text,
	ActivityIndicator,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import IconTextInput from "@/components/IconTextView";
import Checkbox from "@/components/Checkbox";
import { Colors } from "@/constants/Colors";
import {Link, Redirect} from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "@/firebase/firebase";
import {useFriendlyError} from "@/hooks/useFirebaseError";
import {useSession} from "@/firebase/ctx";

const SignIn: React.FC = () => {
	const { signIn, isLoading, session } = useSession();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { error, setFriendlyError, clearError } = useFriendlyError();

	if (session) {
		return <Redirect href="/(app)" />;
	}

	const handleSignIn = async () => {
		clearError();  // Reset error state


		try {
			await signIn(email, password);
			// Successfully signed in
			// You can navigate to the next screen or update state as needed
		}catch (err: any) {
			setPassword("");
			setFriendlyError(err); // Set friendly error message
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.safeArea}
		>
			<ThemedView style={styles.container}>
				<View style={styles.greetingText}>
					<ThemedText type="title">Welcome</ThemedText>
				</View>
				<View>
					<ThemedText type="title">
						Beastie OfficeR
					</ThemedText>
				</View>

				<View style={styles.mutedTextContainer}>
					<ThemedText type="default">
						You have to sign in to access all tasks and to create new ones!
					</ThemedText>
				</View>

				<View style={styles.inputsContainer}>
					<IconTextInput
						icon={"mail"}
						value={email}
						onChangeText={setEmail}
						placeholder="Email"
						keyboardType="email-address"
						autoCapitalize="none"
					/>
					<IconTextInput
						icon={"key"}
						value={password}
						onChangeText={setPassword}
						placeholder="Password"
						secureTextEntry
					/>
				</View>

				{error && <Text style={styles.error}>{error}</Text>}

				<View style={styles.rememberContainer}>
					<Checkbox label="Remember me?" />
          {/* @ts-ignore */}
					<Link href="/forgot-password" asChild>
						<TouchableOpacity>
							<ThemedText type="link">Forgot Password</ThemedText>
						</TouchableOpacity>
					</Link>
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={handleSignIn}
					disabled={isLoading}
				>
					<Text style={styles.buttonText}>
						{isLoading ? "Signing In..." : "Login"}
					</Text>
				</TouchableOpacity>

				{isLoading && <ActivityIndicator style={styles.loading} />}
			</ThemedView>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	safeArea: { flex: 1 },
	container: { flex: 1, paddingHorizontal: 16 },
	greetingText: { marginTop: 64, flexDirection: "row", gap: 10 },
	mutedTextContainer: { marginTop: 50 },
	inputsContainer: { marginTop: 20 },
	rememberContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 10,
		alignItems: "center",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 32,
		borderRadius: 40,
		backgroundColor: Colors.dark.tint,
		marginTop: 20,
	},
	buttonText: { color: "#fff", fontSize: 18 },
	error: { color: "red", marginTop: 10, textAlign: "center" },
	loading: { marginTop: 16 },
});

export default SignIn;