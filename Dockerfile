#
FROM 835319453848.dkr.ecr.ap-south-1.amazonaws.com/gnbwebapp:nodejs
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build
#RUN npm ci --only=production
#COPY build /usr/src/app


CMD [ "npm","run","start:prod"]
