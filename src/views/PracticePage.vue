<template>
  <main class="app-main fade-in">
    <div class="word-card card shadow-lg">
      <div class="card-body d-flex flex-column">
        <div class="flex-grow-1 d-flex align-items-center justify-content-center">
          <span class="word">{{ words[currentIndex].english }}</span>
        </div>
        <button
          class="btn btn-primary practice-btn btn-show-translation mt-3"
          @click="revealTranslation"
          v-if="!showTranslation"
        >
          Show Translation
        </button>
        <p class="mt-3 text-muted" v-if="showTranslation">
          Translation: {{ words[currentIndex].ukrainian }}
        </p>
      </div>
    </div>

    <div class="mt-4 d-flex flex-column flex-sm-row gap-3 justify-content-center text-center word-buttons">
      <button class="btn btn-primary practice-btn next-word-btn" @click="nextWord">Next Word</button>
      <button class="btn btn-primary practice-btn i-know-this-word-btn" @click="knowWord">I Know This Word</button>
    </div>
  </main>
</template>

<script>
import words from '@/assets/data/words.json'

export default {
  name: 'PracticePage',
  data() {
    return {
      words,
      currentIndex: 0,
      showTranslation: false
    };
  },
  methods: {
    nextWord() {
      this.currentIndex = (this.currentIndex + 1) % this.words.length;
      this.showTranslation = false;
    },
    revealTranslation() {
      this.showTranslation = true;
    },
    knowWord() {
      const nickname = localStorage.getItem("activeUser");
      if (!nickname) {
        alert("You must be logged in to track known words.");
        this.$router.push("/login");
        return;
      }

      let userKey = null;
      let user = null;

      // Знаходимо об'єкт користувача по nickname
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        try {
          const candidate = JSON.parse(localStorage.getItem(key));
          if (candidate.nickname === nickname) {
            userKey = key;
            user = candidate;
            break;
          }
        } catch (e) {
          continue;
        }
      }

      if (!user || !userKey) {
        alert("User not found.");
        return;
      }

      user.knownWords = user.knownWords || [];
      const currentWord = this.words[this.currentIndex].english;

      if (!user.knownWords.includes(currentWord)) {
        user.knownWords.push(currentWord);
        localStorage.setItem(userKey, JSON.stringify(user));
        alert(`"${currentWord}" added to your known words!`);
      } else {
        alert(`You already marked "${currentWord}" as known.`);
      }

      this.nextWord();
    }
  }
};
</script>

<style scoped>
@import '../assets/practice.css';
</style>
