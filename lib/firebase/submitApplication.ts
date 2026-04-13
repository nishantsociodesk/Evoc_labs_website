import { signInAnonymously } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getFirebaseAuth, getFirebaseDb, isFirebaseConfigured } from "./client";

export type InternshipApplicationInput = {
  roleId: "fullstack-internship";
  fullName: string;
  email: string;
  githubUrl?: string;
  portfolioUrl?: string;
  resumeUrl?: string;
  projectLinks?: string;
  message?: string;
};

let signingIn: Promise<void> | null = null;

async function ensureAuthed() {
  if (!isFirebaseConfigured()) {
    throw new Error("FIREBASE_NOT_CONFIGURED");
  }
  const auth = getFirebaseAuth();
  if (auth.currentUser) return;
  signingIn =
    signingIn ??
    signInAnonymously(auth).then(() => {
      signingIn = null;
    });
  await signingIn;
}

export async function submitInternshipApplication(input: InternshipApplicationInput) {
  await ensureAuthed();

  const db = getFirebaseDb();
  const apps = collection(db, "applications");

  await addDoc(apps, {
    roleId: input.roleId,
    fullName: input.fullName,
    email: input.email,
    githubUrl: input.githubUrl ?? null,
    portfolioUrl: input.portfolioUrl ?? null,
    resumeUrl: input.resumeUrl ?? null,
    projectLinks: input.projectLinks ?? null,
    message: input.message ?? null,
    createdAt: serverTimestamp(),
    source: "careers_page",
  });
}

