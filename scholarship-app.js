// Rahma Rounds — Scholarships page logic
// Reads SCHOLARSHIPS from scholarship-data.js, builds tag filters,
// and handles live search + tag filtering. No backend required.

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('post-grid');
  const tagWrap = document.getElementById('tag-filters');
  const searchInput = document.getElementById('scholar-search');
  const countEl = document.getElementById('results-count');
  const emptyState = document.getElementById('empty-state');

  if (!grid || typeof SCHOLARSHIPS === 'undefined') return;

  let activeTag = 'All';
  let query = '';

  // Sort newest-ish by id descending so newly-added posts show first
  const posts = [...SCHOLARSHIPS].sort((a, b) => b.id - a.id);

  // Build the unique tag list
  const allTags = ['All', ...new Set(posts.flatMap(p => p.tags))];

  function renderTags() {
    tagWrap.innerHTML = '';
    allTags.forEach(tag => {
      const btn = document.createElement('button');
      btn.className = 'tag-chip' + (tag === activeTag ? ' active' : '');
      btn.type = 'button';
      btn.textContent = tag;
      btn.addEventListener('click', () => {
        activeTag = tag;
        renderTags();
        renderPosts();
      });
      tagWrap.appendChild(btn);
    });
  }

  function matchesSearch(post) {
    if (!query) return true;
    const haystack = (post.title + ' ' + post.org + ' ' + post.excerpt + ' ' + post.tags.join(' ')).toLowerCase();
    return haystack.includes(query.toLowerCase());
  }

  function matchesTag(post) {
    return activeTag === 'All' || post.tags.includes(activeTag);
  }

  function renderPosts() {
    const filtered = posts.filter(p => matchesTag(p) && matchesSearch(p));

    grid.innerHTML = '';
    filtered.forEach(post => {
      const card = document.createElement('article');
      card.className = 'post-card';
      card.innerHTML = `
        ${post.org ? `<div class="post-meta"><span>${escapeHTML(post.org)}</span></div>` : ''}
        <h3>${escapeHTML(post.title)}</h3>
        <p class="excerpt">${escapeHTML(post.excerpt)}</p>
        <div class="post-tags">
          ${post.tags.map(t => `<span>${escapeHTML(t)}</span>`).join('')}
        </div>
        <a class="post-link" href="${post.link}" target="_blank" rel="noopener">View Details &amp; Apply →</a>
      `;
      grid.appendChild(card);
    });

    countEl.textContent = `${filtered.length} scholarship${filtered.length === 1 ? '' : 's'} found`;
    emptyState.classList.toggle('show', filtered.length === 0);
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  searchInput.addEventListener('input', (e) => {
    query = e.target.value.trim();
    renderPosts();
  });

  renderTags();
  renderPosts();
});
