import { StyleSheet } from "react-native";

  export default StyleSheet.create({    
  btnTRegister: {
    marginVertical: 5,
  },
  btnCRegister: {
    marginVertical: 5,
  },
  image: {},
  container: {
    flex: 1,
  },
  headercontainer: {
    backgroundColor: '#ffffff',
  },
  bgcontainer: {},
  formcontainer: {
    backgroundColor: 'rgb(251, 250, 248)',
    borderRadius: 25,
    marginHorizontal: 18,
    marginVertical: 60,
  },
  header: {
    marginVertical: 10,
  },
  headerImg: {
    width: 170,
    height: 120,
    alignSelf: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#ef233c',
    marginVertical: 30,
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    marginBottom: 6,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
    paddingHorizontal: 15,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    borderRadius: 8,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderColor: '#d3d3d3',
    elevation: 8,
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 6,
    paddingHorizontal: 15,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  btn: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bgcolorblue: {
    backgroundColor: '#0053a3',
  },
  bgcolorlightblue: {
    backgroundColor: '#007bff',
  },
  bgcolorred: {
    backgroundColor: '#ee3944',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  bgImg: {
    width: 35,
    height: 35,
    transform: [
      {
        rotate: '-180deg',
      },
    ],
    top: 40,
    left: 24,
    position: 'relative',
  },
  btnCText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginTop: 53,
    width: 100
  },
  bgColorContact: {
    // flex: 1,
    bottom: 25,
    right: 40,
    position: 'absolute',
    backgroundColor: '#38ecc5',
    borderRadius: 50,
    justifyContent: 'center',
    alignContent: 'center',
    height: 80,
    width:80
  },
});