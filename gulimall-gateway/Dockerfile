FROM java:8
EXPOSE 88

VOLUME /tmp
ADD gulimall-gateway-0.0.1-SNAPSHOT.jar  /app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]