pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from version control
               
            }
        }
        stage('Build') {
            steps {
                // Build your website (e.g., compile assets, run tests)
                sh 'npm install' // Example command, adjust based on your project
                sh 'npm run build' // Example command, adjust based on your project
            }
        }
        stage('Deploy') {
            steps {
                // Copy built files to Nginx web server directory
                sh 'sudo cp -r * /var/www/html' // Adjust path as needed
                //Test
            }
        }
    }
}
