FROM java:8
EXPOSE 10000

VOLUME /tmp
ADD gulimall-product-0.0.1-SNAPSHOT.jar  /app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]