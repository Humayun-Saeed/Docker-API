pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}

	stages {
	    
	    stage('gitclone') {

			steps {
				git 'https://github.com/TAYYAB-IT/Docker-prac'
			}
		}

		stage('Build') {

			steps {
				bat 'docker build -t tybtest90/test1:v1 .'
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
				bat 'docker push tybtest90/test1:v1'
			}
		}