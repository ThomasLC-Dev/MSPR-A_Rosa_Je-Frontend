<template>
  <div class="camera">
    <div class="main-container">
      <div class="button-group">
        <button class="btn-validate" @click="toggleCamera()">
          <span v-if="!isCameraOpen">Ouvrir la Caméra</span>
          <span v-else>Fermer la Caméra</span>
        </button>
        <div v-if="!isCameraOpen" class="ButtonReturn">
          <!-- QUELLE ROUTE METTRE POUR REVENIR A LA PAGE DE CREATION DUNE PLANTE ????? -->
          <input class="btn-validate" type="submit" value="Retour" @click="XXXX">
        </div>
      </div>

      <div class="video-container">
        <video v-show="isCameraOpen" class="camera-video" ref="camera" :width="330" :height="330" autoplay
          playsinline></video>
        <canvas id="photoTaken" v-show="isPhotoTaken" class="canvas-photo" ref="canvas" :width="330"
          :height="330"></canvas>
      </div>

      <button v-if="!isPhotoTaken && isCameraOpen" class="btn-validate" @click="takePhoto">
        <span>Snap!</span>
      </button>

      <button v-show="isPhotoTaken && isCameraOpen" class="btn-validate">
        <a id="downloadPhoto" download="VueRocksPhoto.jpg" class="button" role="button" @click="downloadImage">
          Ajouter
        </a>
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Camera',
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      routeAddPlant: "addnewplants"
    }
  },
  methods: {
    goToView(path) {
      this.$router.push({ name: path });
    },
    createCameraElement() {
      const constraints = (window.constraints = {
        audio: false,
        video: true
      })
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.$refs.camera.srcObject = stream
        })
        .catch(error => {
          alert(error, "May the browser didn't support or there is some errors.")
        })
    },
    stopCameraStream() {
      const tracks = this.$refs.camera.srcObject.getTracks()
      tracks.forEach(track => {
        track.stop()
      })
      console.log('CameraClosed')
    },
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false
        this.isPhotoTaken = false
        this.stopCameraStream()
        console.log('closed');
      } else {
        this.isCameraOpen = true
        this.createCameraElement()
        console.log('open');
      }
    },
    takePhoto() {
      this.isPhotoTaken = !this.isPhotoTaken
      const context = this.$refs.canvas.getContext('2d')
      const photoFromVideo = this.$refs.camera
      context.drawImage(photoFromVideo, 0, 0, 330, 330)
    },
    downloadImage() {
      const imageData = document.getElementById("photoTaken").toDataURL("image/jpeg");
      window.opener.postMessage({ image: imageData });
      self.close();
    }
  }
}
</script>

<style>
.button-group {
  flex-direction: column;
}

.btn-reset {
  position: absolute;
  box-sizing: content-box;
  line-height: 35px;
  top: 25px;
  right: 325px;
  width: 35px;
  height: 35px;
}

.button-snap {
  width: 140px;
  height: 40px;
}

.video-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>