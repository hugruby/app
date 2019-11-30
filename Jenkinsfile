pipeline {
  agent any
  options {
    timeout(time: 2, unit: 'MINUTES')
  }
  environment {
    ARTIFACT_ID = "norman404/app:${env.BUILD_NUMBER}"
  }
  stages {
    stage("Build") {
      steps {
        script {
          dockerImage = docker.build "${env.ARTIFACT_ID}"
        }
      }
    }
  }
}