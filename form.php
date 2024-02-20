<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php include("html/ditme.html");?><!-- tai thu vien dit me vao trong code -->
    <section class="contaiter">
        <form method="get" action="#">
            <div class="dauvao">
                <label>Email</label>
                <input type="email" name="email" placeholder="email" required/> 
    
    
            </div>
            <div class="dauvao">
                <label>so dien thoai</label>
                <input type="so dien thoat" name="sdt" placeholder="Telephone"/> 
                
    
            </div>
            <div class="dauvao">
                <label>tuoi</label>
                <input type="tuoi lon" name="tuoi" placeholder="Age"/> 
                
    
            </div>
            <div class="dauvao">
                <label>matkhau</label>
                <input type="password" name="email" placeholder="Password"/> 
                
    
            </div>
            <div class="dauvao">
                <label>tuoi</label>
                <input type="date" name="DOB" placeholder="Date of birth"/> 
            </div>
            <div class="dauvao">
                <label>ten cau la gi</label>
                <input type="text" name="cac" placeholder="nhan dau buoi"/> 
            </div>
            <div class="dauvao">
                <label>SEX</label>
                <input type="radio" name="cac" value =nu" /> <label >nam</label>
                <input type="radio" name="cac" value ="nam" /> <label >nu</label> 
            </div>
            <div class="dauvao">
                <label>kien co dep trai ko</label>
                <input type="checkbox" name="cac" value ="dss" /> <label >co</label>
                <input type="checkbox" name="cac" value ="ss" /> <label >khong khong co</label> 
                <input type="checkbox" name="cac" value ="cac" /> <label >chim dai</label> 
            </div>
            <div class="dauvao">
                <label>m o dau</label>
                <select name="thanh pho">
                    <option value="hanoi">Ha loi</option>
                    <option value="hanoi">hoa binh</option>
    
                </select>
           
            </div>
            <div class="dauvao">
                <label>diachi</label>
                <textarea name="address" rows="10" cols="100"></textarea>
            
            </div>
            <div class="dauvao">
                <label>xac nhan</label>
                <button type="submit"> xac nhan </button>
                <button type="reset"> reset </button>
                <button type="button"> BUTTON</button>
            
            </div>

        </form>



    </section>
    
</body>
</html>