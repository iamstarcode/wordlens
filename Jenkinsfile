pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                dir('dist/') {
                    // Run commands in the specified directory
                    sh 'echo In Dist folder install'
                    //
                    
                }
            }
        }
       
        stage('Deploy') {
            steps {
                // Copy built files to Nginx web server directory
                sh "sudo cp -r dist/* /var/www/html" // Adjust path as needed
            }
        }
    }
}
