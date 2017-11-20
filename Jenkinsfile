node {
     stage ('Checkout') {
        checkout scm
     }

    stage ('Prepare') {
        bat 'npm install'
    }

    stage ('Test') {
        bat 'npm run lint'
        bat 'npm test'
    }
}