1. e.target.[name of the input field].value
2.use form action and formData in the action handler . formData.get('name of the input field')

*3.
controlled component. use state on change of the field . useful to dynamically Handle error 

3. handle all controlled field on one state object
const [formData, setFormData ] = useState({
    name: '' ;
    password: '',
    phone: '',
})

4 . uncontrolled using useRef




konw ;
✅ 1. e.target.[name].value

👉 Concept:
Form submit করার সময় e.target দিয়ে পুরো form পাওয়া যায়।

প্রতিটি input-এর একটি name থাকে
সেই name ব্যবহার করে value নেওয়া হয়

👉 মূল ধারণা:
Form submit হওয়ার পর data নেওয়া হয়

📌 গুরুত্বপূর্ণ:

শুধু submit-এর সময় কাজ করে
real-time update পাওয়া যায় না
basic পদ্ধতি
✅ 2. FormData + form action

👉 Concept:
Form-এর সব data একসাথে নেওয়ার একটি built-in পদ্ধতি।

name দিয়ে value বের করা হয়
React (modern) এ এটা cleaner way

👉 মূল ধারণা:
Structured ভাবে form data collect করা

📌 গুরুত্বপূর্ণ:

e.target থেকে cleaner
real-time না
modern React-এ useful
✅ 3. Controlled Component

👉 Concept:
React নিজেই input-এর value control করে (state দিয়ে)

user কিছু লিখলে → state update হয়
state → UI update করে

👉 মূল ধারণা:
React-ই data-এর main controller (single source of truth)

📌 গুরুত্বপূর্ণ:

real-time value পাওয়া যায়
validation (error check) সহজ
real project-এ সবচেয়ে বেশি ব্যবহার হয়
✅ 4. One State Object (সব field একসাথে)

👉 Concept:
সব input-এর data একটাই object-এ রাখা হয়

প্রতিটি field = object-এর property

👉 মূল ধারণা:
সব form data এক জায়গায় manage করা

📌 গুরুত্বপূর্ণ:

বড় form-এ খুব useful
code clean থাকে
manage করা সহজ
✅ 5. Uncontrolled Component (useRef)

👉 Concept:
React input control করে না

input নিজেই নিজের value রাখে
দরকার হলে reference দিয়ে value নেওয়া হয়

👉 মূল ধারণা:
Direct DOM থেকে data নেওয়া

📌 গুরুত্বপূর্ণ:

typing-এ re-render হয় না
simple use-case
validation করা কঠিন
🔥 সহজভাবে মনে রাখো
e.target → submit-এর পর data
FormData → cleaner submit data
Controlled → React সব control করে
One object → সব data একসাথে
useRef → React control করে না