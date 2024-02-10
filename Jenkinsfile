pipeline {
    agent any

    stages {
       
        stage('Deploy') {
            steps {
                // Copy built files to Nginx web server directory
                sh "sudo cp -r dist/* etc/nginx/html" // Adjust path as needed
                sh "sudo systemctl restart nginx"
            }
        }
    }
}
