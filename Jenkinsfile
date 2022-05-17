pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}

	stages {
	    
	    stage('gitclone') {

			steps {
				git 'https://github.com/Humayun-Saeed/Docker-API.git'
			}
		}

		stage('Build') {

			steps {
				bat 'docker build -t humayun123/testapp:v0.1 .'
			}
		}

		stage('Login') {
            
			steps {
				//echo "${DOCKERHUB_CREDENTIALS_PSW} "
				bat 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR  --password-stdin.'
                
			}
         }

		stage('Push') {

			steps {
				bat 'docker push humayun123/testapp:v0.1'
			}
		}
    }
}