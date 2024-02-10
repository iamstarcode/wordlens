pipeline {
    agent any

    stages {
       
        stage('Deploy') {
            steps {
                // Copy built files to Nginx web server directory
                sh "sudo cp -r dist/* /var/www/html" // Adjust path as needed
                sh "sudo chmod +rwx /var/www/html/*"
                sh "sudo systemctl restart nginx"
            }
        }
    }
}
