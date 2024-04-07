<template>
  <div class="contact bar">
    <img class="pic" src="./avatar.jpg" />
    <div class="description">
      <div class="name">
        Boštjan Policajšek
      </div>
      <div class="subtitle">
        Oddelek za krvne in seksualne delikte
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  flex-basis: 3.5rem;
  flex-shrink: 0;
  background-color: white;
  width: 100%;

  .pic {
    left: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  }

  .description {
    flex: 1;
  }

  .name {
    font-weight: bold;
    margin-bottom: 0.125rem;
  }

  .message,
  .subtitle {
    font-size: 0.9rem;
    color: #999;
  }

  .badge {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    font-size: 0.9rem;
    padding-top: 0.125rem;
    border-radius: 1rem;
    top: 0;
    left: 2.5rem;
    background: #333;
    color: white;
  }
}
</style>
