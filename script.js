// Live date and time updater
function updateDate() {
  const opt = { 
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric", 
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short"
  };
  const now = new Date();
  const dateStr = now.toLocaleString("en-IN", opt);
  document.getElementById('date-container').textContent = dateStr;
}

// Basic app state
let currentTab = "home";

// Render all pages
function renderHome() {
  document.getElementById('main-content').innerHTML = `
    <h2>Welcome to NXTGEN</h2>
    <p>
      NXTGEN connects passionate Indian teachers with children living abroad.<br>
      Learn your mother tongue <b>(Telugu)</b> or Mathematics from expert Indian educators.<br>
      <b>Modern features, interactive learning, and global community!</b>
    </p>
    <section class="features">
      <h3>Platform Highlights</h3>
      <ul>
        <li>Live Interactive Whiteboard</li>
        <li>Lesson Video Library &amp; Progress Tracker</li>
        <li>Event Calendar &amp; In-app Messaging</li>
        <li>Quiz &amp; Assessments with Badges</li>
        <li>Homework Upload, Resource Sharing</li>
        <li>Bilingual Interface &amp; Parent Dashboard</li>
      </ul>
    </section>
    <section>
      <h3>What Parents Say:</h3>
      <div class="review-block">
        <blockquote><strong>Mrs. Reddy:</strong> "My child regained her mother tongue beautifully, thanks to your teachers."</blockquote>
        <blockquote><strong>Mr. Patel:</strong> "Excellent way to keep our roots alive for kids abroad."</blockquote>
      </div>
    </section>
    <section>
      <h3>What Students Say:</h3>
      <div class="review-block">
        <blockquote><strong>Aryan (USA):</strong> "I can now talk to my grand-parents in Telugu! Thank you NXTGEN."</blockquote>
        <blockquote><strong>Sai (UK):</strong> "Maths classes are fun and interactive."</blockquote>
      </div>
    </section>
  `;
}

function renderSubscriptions() {
  document.getElementById('main-content').innerHTML = `
    <h2>Subscriptions</h2>
    <section>
      <h3>Telugu</h3>
      <div class="packs">
        <div class="pack">
          <h4>Basic Pack</h4>
          <div class="price">$60 / month</div>
          Weekly 3 classes
          <button class="subscribe">Subscribe</button>
        </div>
        <div class="pack">
          <h4>Silver Pack</h4>
          <div class="price">$75 / month</div>
          Weekly 4 classes
          <button class="subscribe">Subscribe</button>
        </div>
        <div class="pack">
          <h4>Golden Pack</h4>
          <div class="price">$85 / month</div>
          Weekly 5 classes + <i>extra features</i>
          <button class="subscribe">Subscribe</button>
        </div>
      </div>
    </section>
    <section>
      <h3>Maths</h3>
      <div class="packs">
        <div class="pack">
          <h4>Basic Pack</h4>
          <div class="price">$60 / month</div>
          Weekly 4 classes
          <button class="subscribe">Subscribe</button>
        </div>
        <div class="pack">
          <h4>Golden Pack</h4>
          <div class="price">$85 / month</div>
          Weekly 5 classes
          <button class="subscribe">Subscribe</button>
        </div>
      </div>
    </section>
    <section>
      <div>All payments are secure. Parents get a dashboard to manage subscriptions and invoices.</div>
    </section>
  `;
}

function renderClasses() {
  document.getElementById('main-content').innerHTML = `
    <h2>Upcoming Classes</h2>
    <section>
      <div class="calendar">
        <b>🗓️ Next class:</b> 2025-07-25 (Telugu, 6:00 PM, Basic)<br>
        <b>🗓️</b> 2025-07-26 (Maths, 7:00 PM, Golden)
      </div>
      <ul class="class-list">
        <li class="class-item">
          <span>
            <b>Telugu (Basic)</b><br>
            2025-07-25, 6:00 PM
          </span>
          <button class="join-btn">Join</button>
        </li>
        <li class="class-item">
          <span>
            <b>Maths (Golden)</b><br>
            2025-07-26, 7:00 PM
          </span>
          <button class="join-btn">Join</button>
        </li>
      </ul>
      <div class="progress-graph">📊 Progress trackers and video library available after each class.</div>
      <div style="margin:10px 0 0 0;">
        <button class="subscribe">Upload Homework</button>
        <button class="subscribe">View Lesson Videos</button>
        <button class="subscribe">Take Quiz</button>
      </div>
    </section>
  `;
}

function renderProfile() {
  document.getElementById('main-content').innerHTML = `
    <h2>Profile</h2>
    <div class="profile-sec">
      <div><b>Name:</b> Ananya Sharma</div>
      <div><b>Country:</b> UK</div>
      <div><b>Learning:</b> Telugu</div>
      <div><b>Age:</b> 8</div>
      <div><b>Classes Attended:</b> 24</div>
      <div class="badges"><b>Badges:</b>
        <span class="badge">Committed Learner</span>
        <span class="badge">Quiz Master</span>
      </div>
      <div style="margin-top:8px;">
        <button class="subscribe">Switch Profile</button>
        <button class="subscribe">Edit Profile</button>
      </div>
    </div>
    <div class="progress-graph">
      Attendance: <b>24/30</b><br>Next badge at 30 classes!
      <div style="height:8px;background:#d3dafe;border-radius:5px;margin:12px 0;">
        <div style="height:8px;border-radius:5px;background:#45b678;width:80%;"></div>
      </div>
    </div>
  `;
}

function render(tab) {
  if (tab === "home") renderHome();
  if (tab === "subscriptions") renderSubscriptions();
  if (tab === "classes") renderClasses();
  if (tab === "profile") renderProfile();
}

// Handle nav switching
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    currentTab = btn.getAttribute("data-tab");
    render(currentTab);
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Initial render and syncing date-time
window.onload = () => {
  updateDate();
  render(currentTab);
  setInterval(updateDate, 1000);
};

