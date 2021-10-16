FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

ENV MONGO_URL=mongodb+srv://devyani:MADSforever290225@zomato.oyv6r.mongodb.net/Zomato?retryWrites=true&w=majority

ENV GOOGLE_CLIENT_ID=264932528634-4pfb51farkin7c91k5e3vlpvjqr56v0u.apps.googleusercontent.com

ENV GOOGLE_CLIENT_SECRET=xccoLdmQs4M4vhXwzFrWbnCr

ENV AWS_S3_ACCESS_KEY=AKIAVKJT64OX4RUTPFER
ENV AWS_S3_SECRET_KEY=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

ENV MAILGUN__API__KEY=0547e73e35122e1efcd58f94c4e38290-443ec20e-46c65cd5
ENV MAILGUN__DOMAIN=sandbox1441323dd7904917b8cf03101a0df110.mailgun.org

ENV RZR_PAY_ID=rzp_test_hGjQCsjWC9iIm4
ENV RZR_PAY_SECRET=U1HBMH0hpwaLAzUOKnASIbjO

ENV PORT=4000
RUN npm run build


CMD ["npm", "run", "start"]