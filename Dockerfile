# 1. Node.js පරිසරය ලබා ගැනීම
FROM node:20-alpine AS base

# 2. වැඩ කරන Directory එක සැකසීම
WORKDIR /app

# 3. Dependencies ස්ථාපනය කිරීම
# Folder structure එක අනුව package.json සහ package-lock.json පවතින්නේ root එකේය
COPY package.json package-lock.json ./
RUN npm install

# 4. මුළු ව්‍යාපෘතියම කොපි කිරීම (src, public, configs ආදිය)
COPY . .

# 5. Next.js ව්‍යාපෘතිය Build කිරීම
RUN npm run build

# 6. Port එක විවෘත කිරීම
EXPOSE 3000

# 7. ව්‍යාපෘතිය ක්‍රියාත්මක කිරීම
CMD ["npm", "start"]