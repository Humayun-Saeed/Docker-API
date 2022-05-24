
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
				bat 'docker build -t humayun123/test:v1 .'
			}
		}
		stage('Login') {
			steps {
				//echo "${DOCKERHUB_CREDENTIALS_PSW} "
			//	bat 'echo -p $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR  --password-stdin'
			bat 'docker login -u humayun81  -p s4s5s6s7s8@'
			}
		}
		stage('Push') {
			steps {
				bat 'docker push humayun123/test1:v1'
			}
		}
		 stage("verify tooling") {
      steps {
        bat '''
          docker version
          docker info
          docker compose version
        '''
      }
    }
	stage('Prune Docker data') {
      steps {
        bat 'docker system prune -a --volumes -f'
      }
    }
    stage('Start container') {
      steps {
        bat 'docker compose up -d --no-color --wait'
        bat 'docker compose ps'
      }
    }
    // stage('Remove All Containers') {
    //   steps {
    //     bat 'docker container  rm -f $(docker ps)'
	// 	bat 'docker image prune --filter="dangling=true"'
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
	post {
		always {
			//bat 'docker compose down --remove-orphans'
            bat 'docker compose ps'
		bat 'docker image prune -f --filter="dangling=true"'
			bat 'docker logout'
		}
	}
}