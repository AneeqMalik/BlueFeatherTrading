# 1. Set your project number as a variable (easier to reuse)
export PROJECT_ID=blue-feather-trading
export PROJECT_NUMBER=535000243605
export SERVICE_ACCOUNT="${PROJECT_NUMBER}-compute@developer.gserviceaccount.com"

# 2. Grant Cloud Build permissions
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:${SERVICE_ACCOUNT}" \
  --role="roles/cloudbuild.builds.builder"

# 3. Grant Storage access (to upload/read build source)
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:${SERVICE_ACCOUNT}" \
  --role="roles/storage.objectAdmin"

# 4. Grant Cloud Run deployer role
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:${SERVICE_ACCOUNT}" \
  --role="roles/run.developer"

# 5. Grant Artifact Registry access (to push/pull images)
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:${SERVICE_ACCOUNT}" \
  --role="roles/artifactregistry.writer"

# 6. Allow service account to act as itself (required by Cloud Build)
gcloud iam service-accounts add-iam-policy-binding $SERVICE_ACCOUNT \
  --member="serviceAccount:${SERVICE_ACCOUNT}" \
  --role="roles/iam.serviceAccountUser"


  gcloud services enable \
  cloudbuild.googleapis.com \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  storage.googleapis.com


  gcloud run deploy blue-feather-trading   --source .   --region us-central1   --platform managed   --allow-unauthenticated   --port 8080   --memory 128Mi   --cpu 0.167   --min-instances 1   --max-instances 3   --set-env-vars NODE_ENV=production,RESEND_API_KEY=re_bGiXxvqA_MveChHrm215bUbwd1oA1QyrM