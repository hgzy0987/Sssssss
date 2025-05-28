self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (e) => {
  // এখানে চাইলে অফলাইন cache করতে পারো
});
