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
	// 	 stage("verify tooling") {
    //   steps {
    //     bat '''
    //       docker version
    //       docker info
    //       docker compose version 
    //       curl --version
    //       jq --version
    //     '''
    //   }
    // }
    // stage('Prune Docker data') {
    //   steps {
    //     bat 'docker system prune -a --volumes -f'
    //   }
    // }
    // stage('Start container') {
    //   steps {
    //     bat 'docker compose up -d --no-color --wait'
    //     bat 'docker compose ps'
    //   }
    // }
    // stage('Run tests against the container') {
    //   steps {
    //     bat 'curl http://localhost:3000/param?query=demo | jq'
    //   }
	//}
 }

	// post {
	// 	always {
	// 		bat 'docker compose down --remove-orphans -v'
    //         bat 'docker compose ps'
	// 		bat 'docker logout'
	// 	}
	// }


}