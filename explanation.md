
# **YOLO Shopping App – Explanation**

## **1. Choice of Kubernetes Objects**

* **Deployments**

  * **Frontend Deployment:** Runs the React client (`frontend-deployment.yaml`). Replicas set to 1 for development, but can scale horizontally.
  * **Backend Deployment:** Runs Node.js backend (`backend-deployment.yaml`). Ensures availability using Deployment controller.
* **StatefulSet**

  * **MongoDB StatefulSet:** Chosen instead of a Deployment to manage persistent storage with stable network identities. Each pod gets a unique identifier (`mongo-0`) and retains its storage on restarts.
* **Services**

  * **NodePort Services:** Exposes frontend and backend pods outside the cluster. Chosen because it’s simple for development/testing on GKE.
  * **ClusterIP Service for Mongo:** Internal-only access to the database; frontend/backend communicate via backend-service, not directly with MongoDB.

---

## **2. Persistent Storage**

* MongoDB is configured with **PersistentVolume (PV)** and **PersistentVolumeClaim (PVC)**.
* Storage class: `standard` (local storage on GKE nodes).
* Data is **retained even if Mongo pod is deleted**

**PVC Example**:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mongo-pvc
  namespace: yolo-project
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
```

**PV Example**:

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mongo-pv
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: standard
```

---

## **3. Exposing Pods**

* **Frontend Service (NodePort)**: Makes the React app accessible from browser using `<NODE-IP>:<NODE-PORT>`.
* **Backend Service (NodePort)**: Allows frontend and external requests to reach backend.
* **Mongo Service (ClusterIP)**: Only accessible by backend pods for security reasons.

---

## **4. Git Workflow**

* Each file was committed **individually with descriptive messages** for clarity and tracking.
* Backend, frontend, and Kubernetes manifest updates were committed in **separate commits**.
* Repository contains:

  * Deployment YAMLs (`frontend-deployment.yaml`, `backend-deployment.yaml`, `mongo-deployment.yaml`)
  * Service YAMLs (`frontend-service.yaml`, `backend-service.yaml`, `mongo-service.yaml`)
  * `explanation.md` and `README.md`

---

## **5. Debugging & Testing Measures**

* Confirmed pods are running:

```bash
kubectl get pods -n yolo-project
```

* Confirmed services are exposed correctly:

```bash
kubectl get svc -n yolo-project
```

* Verified persistent storage works:

  * Added products via frontend
  * Deleted Mongo pod
  * Confirmed products persisted

---

## **6. Best Practices Implemented**

* Docker images are tagged (`h1baq/yolo-client:v1.0.1`) for easy identification.
* Labels and selectors used in all deployments and services.
* StatefulSet ensures stable storage and network identity for MongoDB.


